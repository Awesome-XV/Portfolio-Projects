// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, arr) => {
  return {
      specimenNum: num,
      dna: arr,
    mutate() {
      const randomIndex = Math.floor(Math.random() * this.dna.length);
      const currentbase = this.dna[randomIndex];
      let newBase = returnRandBase();
      while (newBase === currentbase) {
        newBase = returnRandBase();
      }
      this.dna[randomIndex] = newBase;
      return this.dna;
    },

    compareDNA(otherpAequor) {
      let commonBases = 0; 
      console.log('this.dna:', this.dna); // Debugging use 33, 34
      console.log('otherpAequor.dna:', otherpAequor.dna);

      if (!otherpAequor || !otherpAequor.dna) {
        console.error('otherpAequor or otherpAequor.dna is undefined');
        return;
      } // Checking to see that both are defined also for debugging use

      for (let i = 0; i < this.dna.length; i++)
        if (this.dna[i] === otherpAequor.dna[i]) {
          commonBases++;
        }
        const percentageCommon = (commonBases / this.dna.length) * 100;
          console.log(`Specimin ${this.specimenNum} and specimin ${otherpAequor.specimenNum} have 
            ${percentageCommon.toFixed(2)}% DNA in common`);
      },
    willLikelySurvive() {
      const survivalBases = this.dna.filter(base => base === 'C' || base === 'G');
        const survivalRate = (survivalBases.length / this.dna.length) * 100;
        if(survivalRate >= 60) {
          return true
        } else {
          return false
        }
    }  
  };
};

const pAequorArray = [];

for (let i = 1; i <= 30; i++) {
  const newpAequor = pAequorFactory(i, mockUpStrand());
  pAequorArray.push(newpAequor);
}

const pAequor1 = pAequorArray[0]; // Looking at the array's first and second variable
const pAequor2 = pAequorArray[1];

pAequor1.compareDNA(pAequor2);
console.log(pAequor1.willLikelySurvive());








