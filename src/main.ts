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
        a) 39
        b) 41
        c) 43
        d) 45`, []);

        WA.player.state.foundItem1 = true
    })
    WA.room.area.onLeave('Q1').subscribe(closePopup)

    WA.room.area.onEnter('Q2').subscribe(() => {
        currentPopup = WA.ui.openPopup("Q2_Popup", `Q2: Combien de Terre, Jupiter pourrait-elle contenir ?\n
        a) Environ 200 000
        b) Presque 1 000
        c) Quasiment 1300
        d) La moitié du soleil`, []);

        WA.player.state.foundItem2 = true
    })
    WA.room.area.onLeave('Q2').subscribe(closePopup)

    WA.room.area.onEnter('Q3').subscribe(() => {
        currentPopup = WA.ui.openPopup("Q3_Popup", `Q3: Combien de tickets seront mis en vente pour les Jeux de Paris 2024 ?\n
        a) 2 millions
        b) 8 millions
        c) 13 millions
        d) 20 millions`, []);

        WA.player.state.foundItem3 = true
    })
    WA.room.area.onLeave('Q3').subscribe(closePopup)

    WA.room.area.onEnter('Q4').subscribe(() => {
        currentPopup = WA.ui.openPopup("Q4_Popup", `Q4: Sur quelle thématique KPMG et HEC Paris ont-il noués un partenariat académique ?\n
        a) IA Générative
        b) ESG
        c) Optimisation des coûts IT
        d) Métavers`, []);

        WA.player.state.foundItem4 = true
    })
    WA.room.area.onLeave('Q4').subscribe(closePopup)

    WA.room.area.onEnter('Q5').subscribe(() => {
        currentPopup = WA.ui.openPopup("Q5_Popup", `Q5: Combien de collaborateurs KPMG ont participé à la course Enfants sans cancer (Imagine for Margo) ?\n
        a) 236
        b) 348
        c) 432
        d) 518`, []);

        WA.player.state.foundItem5 = true
    })
    WA.room.area.onLeave('Q5').subscribe(closePopup)

    WA.room.area.onEnter('Form').subscribe(() => {
        if (WA.player.state.foundItem1 && WA.player.state.foundItem2 && WA.player.state.foundItem3 && WA.player.state.foundItem4 && WA.player.state.foundItem5) {
            currentPopup = WA.ui.openPopup("Form_Popup", `Félicitation ${WA.player.name}, vous avez trouvé tous les objets cachés. Voyons maintenant si vous avez correctement répondu aux questions.`, [
                {
                    label: 'Valider mes réponses',
                    className: 'primary',
                    callback: () => WA.nav.openCoWebSite('https://forms.office.com/Pages/ResponsePage.aspx?id=uyT_3okgAESMjvceaAN4sqSJN6FRu7JNuSaSmXU0btRUMDFDNTEyVjY3R0g4RTBLQlBRWTcwNVJXVS4u'),
                }
            ]);
        } else {
            currentPopup = WA.ui.openPopup("Form_Popup", `Salutation ${WA.player.name}, trouvez les 5 objets cachés dans le vaisseau, notez vos réponses, et revenez ici une fois cela fait afin de les valider !`, []);
        }
       
    })
    WA.room.area.onLeave('Form').subscribe(closePopup)

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
