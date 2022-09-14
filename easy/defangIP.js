let defangIPaddr = function(address) {
    return address.replaceAll('.', '[.]')
};

defangIPaddr('251.100.50.1')