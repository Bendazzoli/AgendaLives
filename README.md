# AgendaLives
Repo destinado ao curso de Angular da Michelli Brito, e utilizando a API Spring com deploy na Microsoft Azure

## Backend
Na pasta backend se encontra a API Rest para a aplicação frontend em Angular.
- Acessar repositório raiz e executar o comando `mvn clean install` para baixar as dependências.

### Deploy na Microsoft Azure
- Ter conta na Microsoft Azure (Gratuita): `https://azure.microsoft.com/pt-br/free/`
- Ter o Azure CLI instalado na máquina: `https://docs.microsoft.com/pt-br/cli/azure/?view=azure-cli-latest`
- Seguir documentação (API MongoDB Spring Data com Azure Cosmos DB): `https://docs.microsoft.com/pt-br/azure/developer/java/spring-framework/configure-spring-data-mongodb-with-cosmos-db`

#### Extras
* Plugin microsoft azure no `pom.xml`
```
<plugin> 
    <groupId>com.microsoft.azure</groupId>  
    <artifactId>azure-webapp-maven-plugin</artifactId>  
    <version>1.9.0</version>  
</plugin> 
```

* pasta raiz, onde se encontra o `pom.xml`, executar comandos: 
- login: `azure login`
- config: `mvn azure-webapp:config`, para configurações iniciais:
    - vai escolher SO, versão Java..
- reconfig: `mvn azure-webapp:config`, para ajustar configurações:
    - selecionar `1. Aplication`
    - appName: `default`
    - resourceGroup: `default`
    - region: trocar para `centralus`
    - pricingTier: `default`

* Alterar pom após configurações e incluir entre as linhas de fechamento da tag `</runtime>` e a abertura da tag `<deployment>`,  a configuração de `appSettings`:
```
<appSettings>
    <property>
        <name>JAVA_OPTS</name>
        <value>-Dserver.port=80</value>
    </property>
</appSettings>
```

* Executar comando `mvn clean package`

* Executar o deploy no Azure: `mvn azure-webapp:deploy`

## Frontend
Na pasta frontend se encontra a aplicação de agendas de lives.
- Acessar repositório raiz e executar comando `npm install` para baixar as dependências.
