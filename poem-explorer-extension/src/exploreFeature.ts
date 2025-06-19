import * as vscode from 'vscode';
import { Poem, PoemList } from './types';

const poems: PoemList = [
    { title: "Whispers of the Night", content: "In the stillness of the night, whispers roam..." },
    { title: "Dancing Leaves", content: "Leaves dance in the autumn breeze, a symphony of colors..." },
    { title: "Eternal Waves", content: "Waves crash upon the shore, a timeless embrace..." },
];

export function showPoemExplorer(context: vscode.ExtensionContext) {
    const poemTitles = poems.map(poem => poem.title);
    
    vscode.window.showQuickPick(poemTitles, { placeHolder: 'Select a poem to view' })
        .then(selectedTitle => {
            if (selectedTitle) {
                const selectedPoem = poems.find(poem => poem.title === selectedTitle);
                if (selectedPoem) {
                    vscode.window.showInformationMessage(selectedPoem.content);
                }
            }
        });
}