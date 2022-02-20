import { useEffect, useState } from "react";

import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'; 
import db from "../utils/firebase";

const useFirebase = () => {
    const [deckCards, setDeckCards] = useState([]);
    const [deckName, setDeckName] = useState("New Deck");
    const [decks, setDecks] = useState([]);  
    const [deck, setDeck] = useState(null);
    const [inputData, setInputData] = useState({
        deckName: '',
    });
    

    const decksCollectionRef = collection(db, "decks");
    
    useEffect(() => {
        getDocs(collection(db, 'decks'))
          .then(decks => {
            /* console.log(decks.docs[0].data().id) */
            const resolvedDecks = decks.docs.map(deck => ({ name: deck.data().name, cardList: deck.data().cards, id: deck.id} ));
            setDecks(resolvedDecks);
            
          });
    }, []);

    useEffect(() => {
        setDeckName(inputData.deckName);
    },[inputData]);
    
    const handleDeckNameChange = async (event) => {
        setInputData({
            ...inputData,
            [event.currentTarget.name] : event.currentTarget.value
        });
    }
    
    const handleSaveDeck = async (event) => {
        event.preventDefault();
        await addDoc(decksCollectionRef, {name: deckName, cards: deckCards} )
    }

    const getDeck = (deckId) => {
        getDocs(collection(db, 'decks'))
            .then(decks => {
                const resolvedDecks = decks.docs.map(deck => ({ name: deck.data().name, cardList: deck.data().cards, id: deck.id} ));
                const deck = resolvedDecks.find(deck => deck.id === deckId); 
                setDeck(deck || null);
        }); 
    }

    const firebaseManager = {
        decks: decks,
        deck: deck,
        deckCards: deckCards,
        getDeck: getDeck,
        handleSaveDeck: handleSaveDeck(),
        handleDeckNameChange: handleDeckNameChange(),
    }

    /* return [decks, deckCards, handleSaveDeck, handleDeckNameChange, getDeck , deck]; */
    return firebaseManager;
}

export default useFirebase;


