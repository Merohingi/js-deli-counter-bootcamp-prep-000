var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name); 
return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(name) {
  katzDeliLine[name].length = 1;
  `Currently serving ${katzDeliLine.shift()}.`;
}