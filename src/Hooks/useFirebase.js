import { useEffect, useState } from "react";

import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, arrayUnion, setDoc, arrayRemove } from 'firebase/firestore'; 
import db from "../utils/firebase";
import useMounted from "./useMounted";

const useFirebase = () => {
    const isMounted = useMounted();
    const [deckCards, setDeckCards] = useState([]);
    const [deckName, setDeckName] = useState("New Deck");
    const [decks, setDecks] = useState([]);  
    const [deck, setDeck] = useState(null);
    const [deckId, setDeckId] = useState();
    const [inputData, setInputData] = useState({
        deckName: '',
    });
    
    const decksCollectionRef = collection(db, "decks");
    
    useEffect(() => {
        getDocs(collection(db, 'decks'))
          .then(decks => {
            const resolvedDecks = decks.docs?.map(deck => ({ name: deck.data().name, cardList: deck.data().cards, id: deck.id} ));
            setDecks(resolvedDecks);
          });
    }, [deckName]); 
    
    useEffect(() => {
        setDeckName(inputData.deckName);
    },[inputData]);
    
    const handleDeckNameChange = async (event) => { //OK
        setInputData({
            ...inputData,
            [event.currentTarget.name] : event.currentTarget.value
        });
        setDeckName(inputData.deckName)
    } 
    
    const handleSaveDeckName = async (event, deckId) => {       // OK
        event.preventDefault();
        
        const ref = doc(db, "decks", `${deckId}`);
                await updateDoc(ref, {
                    name: deckName,
                })
        getDeck(deckId);
    } 
    
    const handleSaveDeck = async (event) => { // OK
        event.preventDefault();
        await addDoc(decksCollectionRef, {name: deckName, cards: deckCards} )
    }

    const getDeck = async (deckId) => {
        await getDocs(collection(db, 'decks'))
            .then(decks => {
                const resolvedDecks = decks.docs.map(deck => ({ name: deck.data().name, cardList: deck.data().cards, id: deck.id} ));
                const deck = resolvedDecks.find(deck => deck.id === deckId); 
                setDeck(deck);
        }); 
    } 

    const addCardsToDeck = async (selectedCardId, deckId) => {
        const ref = doc(db, "decks", `${deckId}`);
        await updateDoc(ref, {
            cards: arrayUnion(`${selectedCardId}`)
        });
        await getDocs(collection(db, 'decks'))
        .then(decks => {
            const resolvedDecks = decks.docs.map(deck => ({ name: deck.data().name, cardList: deck.data().cards, id: deck.id} ));
            const currentDeck = resolvedDecks.find(deck => deck.id === deckId); 
            setDeck(currentDeck);
        }); 
    }

    const removeCardInDeck = async (selectedCardId, deckId) => {
        const ref = doc(db, "decks", `${deckId}`);
        await updateDoc(ref, {
            cards: arrayRemove(`${selectedCardId}`)
        });
        getDeck(deckId);
    }

    const createNewDeck = async () => {
        const docRef = await addDoc(collection(db, "decks"), {
            name: "New Deck",
            cards: [],
          });
        /* console.log("Document written with ID: ", docRef.id); */
        return docRef.id;
    }
   
    const firebaseManager = {
        decks: decks,
        deck: deck,
        deckId: deckId,
        deckName: deckName,
        deckCards: deckCards,
        setDeck: setDeck,
        setDeckId: setDeckId,
        getDeck: getDeck,
        handleSaveDeck: handleSaveDeck,
        handleDeckNameChange: handleDeckNameChange,
        handleSaveDeckName: handleSaveDeckName, 
        addCardsToDeck: addCardsToDeck,
        removeCardInDeck: removeCardInDeck,
        createNewDeck: createNewDeck,
    }

    return firebaseManager;
}

export default useFirebase;


