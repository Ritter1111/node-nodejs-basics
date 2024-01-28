const parseArgs = () => {
    const allArguments = process.argv.slice(2);
    const a = allArguments.reduce((acc, item, indx, array) => {
      if (indx % 2 === 0) {
        const filtered = item.slice(2);
        const value = array[indx + 1];
        const comma = indx < filtered.length - 1 ? "," : "";
        acc.push(`${filtered} is ${value}${comma}`);
      }
      return acc;
    }, []);
    console.log(a.join(" "));
  };
  
  parseArgs();
  