import { useEffect, useState } from "react";

import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'; 
import db from "../utils/firebase";

const useFirebase = () => {
    const [deckCards, setDeckCards] = useState([]);
    const [deckName, setDeckName] = useState("New Deck");
    const [decks, setDecks] = useState([]);  
    const [inputData, setInputData] = useState({
        deckName: '',
    });

    const decksCollectionRef = collection(db, "decks");

    useEffect(() => {
        let userDecks = [];
        
        const getFirebaseDeckData = async () => {
            const firebaseDeckData = await getDocs(collection(db, 'decks'));

            firebaseDeckData.forEach((deck) => {
                userDecks.push([{
                    name: deck.data().name,
                    cardList: deck.data().cards,
                }]);
            })
        }
        getFirebaseDeckData();
        setDecks(userDecks);
    }, []);

/*     if (decks.length > 0) {
        console.log(JSON.stringify(decks[1][0].cardList));
    } */

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

    return [decks, deckCards, handleSaveDeck, handleDeckNameChange];
}

export default useFirebase;


