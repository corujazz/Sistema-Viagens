Considerações

Alterou de 3 para 10 destinos pré cadastrados
Uso de commits para salvar. Commits parciais foram usados para salvar arquivos específicos.
git reset --hard ->  Para apagar TODAS as informações salvas nos commits anteriores. Nem sempre é útil.
Basicamente o sistema inicial possui os seguintes arquivos: FormDestino.jsx, Destino.jsx dentro das pastas - destinos e components. Footer.jsx e Header.jsx dentro da pasta main. Contato.jsx, Destinos.jsx e Home.jsx dentro da pasta pages.
Alterações nos arquivos já criados para ter novas funcionalidades. Ex: funcionalidade de calcular custos e estadia dos locais selecionados.
Hook UseEffect - Serve para retornar um valor quando selecionado e para de selecionar esse mesmo valor após uma determinada instrução. Ex: Apertar o botão (algo que muda) → O ajudante faz algo (como o barulho).Parar de apertar o botão ou ir embora (mudança) → O ajudante para de fazer o que estava fazendo.
Hook UseState - Serve para guardar um valor pré definido e mudar as informações.
A diferença entre esses dois hooks:  useState é usado para armazenar dados, e useEffect é usado para executar ações baseadas nesses dados ou outras mudanças.
Com o código alterado, é possível selecionar a data de ida, de volta, o número de participantes e a distância entre os locais.
Colocou a função “destino” como um estado para este ser retornado junto com as outras informações.
Renderizou um destinado que estava setado.
Transformou os destinos em botões.
