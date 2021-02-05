# Devops

Remplacer les hosts dans le fichier inventory pour pointer sur l'host de vos vm

## Installer les machines

```ansible-playbook -i ./inventory --ask-vault --extra-vars '@./vault/secrets.yml' ./initialize_servers.yml```

## Deploy front

```ansible-playbook -i ./inventory --ask-vault --extra-vars '@./vault/secrets.yml' ./deploy_front.yml```

## Deploy back

```ansible-playbook -i ./inventory --ask-vault --extra-vars '@./vault/secrets.yml' ./deploy_back.yml```