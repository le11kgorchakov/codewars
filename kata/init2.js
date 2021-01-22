var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 24, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
  ]

  officers.forEach((e,i,arr) => console.log(arr.indexOf(e.id) === 0))
  