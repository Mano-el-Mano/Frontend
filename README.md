# Frontend
setup linter

install eslint plugin

install prettier plugin (disable it after installation)

``settings.json`` 
```json
{
    "javascript.updateImportsOnFileMove.enabled": "always",
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.enable": true,
    "eslint.lintTask.enable": true,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
    ],
    "eslint.probe": [
        "javascript", 
        "javascriptreact"
    ],
    "eslint.workingDirectories": [{ "mode": "auto" }],
    "eslint.alwaysShowStatus": true,
    "eslint.codeAction.showDocumentation": {
        "enable": true
    },
}
``` 
