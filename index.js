const readline = require('readline-sync')

function start() {
  const content = {}

  content.searchTerm = askAndReturnTerm()
  content.prefix = askAndReturnPrefix()

  function askAndReturnTerm() {
    return readline.question('Digite o nome da rede de Polos EAD: ')
  }

  function askAndReturnPrefix() {
    const prefixes = ['Email', 'Telefone', 'Endereco']
    const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Escolha uma opcao: ')
    const selectedPrefixText = prefixes[selectedPrefixIndex]
    
    return selectedPrefixText
  }

  console.log(content)
}

start()