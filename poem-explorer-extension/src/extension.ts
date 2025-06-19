import * as vscode from 'vscode';
import { showPoemExplorer } from './exploreFeature';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('poemExplorer.showExplorer', () => {
        showPoemExplorer();
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}