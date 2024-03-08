function studentHogwarts() {
    var privateScore = 0;
	var name = null;
	
    function changeScoreBy(points) {
        privateScore = privateScore + points;
	}

	
	return {

		getScore() {
			return name + ": " + privateScore;
		},

		setName(newName) {
			name = newName;
		},

		rewardStudent() {
			changeScoreBy(1);
		},

		penalizeStudent() {
			changeScoreBy(-1);
		}
	}
}

let harry = new studentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

let draco = new studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
