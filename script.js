class Player {
    // creating the names and position of players
    constructor(name, position) {
      this.name = name;
      this.position = position;
    }
    describe() {
      //assigning a player to a position
      return `${this.name} plays ${this.position}.`;
    }
  }
  class Team {
    //creating a blank array to to hold players on team
    constructor(name) {
      this.name = name;
      this.players = [];
    }
    addPlayer(player) {
      // adding players buy using .push
      if (player instanceof Player) {
        this.players.push(player);
      } else {
        throw new error(
          "You can only add instance of player. Argument is not a player: ${player}"
        );
      }
    }
    describe() {
      // print out players with this.team and how many are on the team with .length.
      return `${this.name} has ${this.players.length} players.`;
    }
  }
  class Menu {
    //initialize teams with this.teams with a open array to add multiple teams
    constructor() {
      this.teams = [];
      this.selectedTeam = null;
    }
    start() {
      // creating menu options with the switch statement
      let selection = this.showMainMenuOptions();
      while (selection != 0) {
        switch (selection) {
          case "1":
            this.createTeam();
            break;
          case "2":
            this.viewTeam();
            break;
          case "3":
            this.deleteTeam();
            break;
          case "4":
            this.displayTeams();
            break;
          default:
            selection = 0;
        }
        selection = this.showMainMenuOptions();
      }
      alert("Goodbye");
    }
    showMainMenuOptions() {
      // creating menu options
      return prompt(`
              0) exit
              1) create new team
              2) view team
              3) delete team
              4) display all teams
          `);
    }
    showTeamMenuOptions(teamInfo) {
      // implimenting options above
      return prompt(`
              0) back
              1) create player
              2) delete player
              -------------
              ${teamInfo}
          `);
    }
    displayTeams() {
      // displaying teams by iterrating through our class menu
      let teamString = "";
      for (let i = 0; i < this.teams.length; i++) {
        teamString += i + ") " + this.teams[i].name + "\n";
      }
      alert(teamString);
    }
    createTeam() {
      //array that keeps team and pushes to array
      let name = prompt("Enter name for new team:");
      this.teams.push(new Team(name));
    }
    viewTeam() {
      //see details of a team
      let index = prompt("Enter index of team you wish to view:"); //view team
      if (index > -1 && index < this.teams.length) {
        //validate user imput
        this.selectedTeam = this.teams[index];
        let description = "Team Name: " + this.selectedTeam.name + "\n"; //building description
        for (let i = 0; i < this.selectedTeam.players.length; i++) {
          description +=
            i +
            ") " +
            this.selectedTeam.players[i].name +
            " - " +
            this.selectedTeam.players[i].position +
            "\n"; //building list of all team players
        }
        let Selection = this.showTeamMenuOptions(description); // create and delete players
        switch (Selection) {
          case "1":
            this.createPlayer();
            break;
          case "2":
            this.deletePlayer();
        }
      }
    }
    deleteTeam() {
      let index = prompt("Enter index of player you wish to delete:");
      if (index > -1 && index < this.teams.length) {
        this.teams.splice(index, 1);
      }
    }
    createPlayer() {
      // create new player by pushing on to selected team variable
      let name = prompt("Enter name for new player");
      let position = prompt("Enter position for new player");
      this.selectedTeam.players.push(new Player(name, position));
    }
    deletePlayer() {
      // delete player by using the .splice method and removing 1 element
      let index = prompt("Enter the index of the player you wish to delete:");
      if (index > -1 && index < this.selectedTeam.players.length) {
        this.selectedTeam.players.splice(index, 1);
      }
    }
  }
  let menu = new Menu();
  menu.start();
  
  
  
  
  
  
  
  
  
  
  
  