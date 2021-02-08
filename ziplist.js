function zipList(a, b)
{
  const newList = [];
  for(let i = 0; i < a.length; i++)
  {
    newList.push(a[i], b[i]);
  }
  return newList;
}

function zipListTheEasyWay(a, b)
{
  return _.flatten(_.zip(a, b));
}

const test = ['M', 'a', 't', 't', 'h', 'e', 'w'];
const test2 = ['D', 'y', 'n', 'a', 's', 't', 'y'];
console.log(zipList(test, test2));
console.log(zipListTheEasyWay(test, test2));