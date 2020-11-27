let a = [{ name: "Kohli", runs: 5880 }, { name: "Dhoni", runs: 4880 }, { name: "Rohit", runs: 5100 }];
let b = [...a];
for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < i; j++) {
        if (b[i].runs > b[j].runs) {
            let t = b[i];
            b[i] = b[j];
            b[j] = t;
        }
    }
}
b.sort(function(n1, n2) { return n1.runs > n2.runs ? 1 : n1.runs < n2.runs ? -1 : 0 });