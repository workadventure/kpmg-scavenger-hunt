/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    WA.room.area.onEnter('Q1').subscribe(() => {
        currentPopup = WA.ui.openPopup("Q1_Popup", `Q1: Combien d'associés compte la BU Connected Tech ?\n
        1) 39\n
        2) 41\n
        3) 43`, []);
    })
    WA.room.area.onLeave('Q1').subscribe(closePopup)

    WA.room.area.onEnter('Q2').subscribe(() => {
        currentPopup = WA.ui.openPopup("Q2_Popup", `Q2: Combien de Terre, Jupiter pourrait-elle contenir ?\n
        1) Environ 200 000\n
        2) Presque 1 000\n
        3) Quasiment 1300\n
        4) La moitié du soleil`, []);
    })
    WA.room.area.onLeave('Q2').subscribe(closePopup)

    WA.room.area.onEnter('Q3').subscribe(() => {
        currentPopup = WA.ui.openPopup("Q3_Popup", `Q3: Combien de tickets seront mis en vente pour les Jeux de Paris 2024 ?\n
        1) 2 millions\n
        2) 8 millions\n
        3) 13 millions`, []);
    })
    WA.room.area.onLeave('Q3').subscribe(closePopup)

    WA.room.area.onEnter('Q4').subscribe(() => {
        currentPopup = WA.ui.openPopup("Q4_Popup", `Q4: Sur quelle thématique KPMG et HEC Paris ont-il noués un partenariat académique ?\n
        1) IA Générative\n
        2) ESG\n
        3) Métavers`, []);
    })
    WA.room.area.onLeave('Q4').subscribe(closePopup)

    WA.room.area.onEnter('Q5').subscribe(() => {
        currentPopup = WA.ui.openPopup("Q5_Popup", `Q5: Combien de collaborateurs KPMG ont participé à la course Enfants sans cancer (Imagine for Margo) ?\n
        1) 236\n
        2) 348\n
        3) 432`, []);
    })
    WA.room.area.onLeave('Q5').subscribe(closePopup)

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};
