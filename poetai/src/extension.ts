import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('poetai.helloWorld', () => {
        vscode.window.showInformationMessage('Hello from PoetAI!');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}