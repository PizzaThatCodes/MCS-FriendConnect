import { Session } from "friend-connect";



new Session({

	hostName: "MCX Anarhcy", // The hostname of the server

	worldName: "MCS's Anarhcy Server", // Use as a MOTD

	version: "1.19.30", // The version of the session, this can be any string.



	protocol: 545, //The protocol of the server you are connecting to.



	connectedPlayers: 0, // Used as a fallback if pinging the server fails.

	maxConnectedPlayers: 40, // Used as a fallback if pinging the server fails.



	ip: "51.79.111.163", // The ip of the server you are using.

	port: 25578, // The port of the server you are using.

	connectionType: 6, // I don't recommend changing this.



	log: true, // If you want to see the console output set to true.

	joinability: "joinable_by_friends", // The joinability of the session, if this is changed only one account can be used to connect to the session.

	autoFriending: true, // Set this to true if you want to automatically add people who follow the accounts.

	pingServerForInfo: true, // If FriendConnect keeps erroring out due to a rakNet ping error you can set this to false.



	tokenPath: "./auth", // The path to the directory that contains the authentication tokens.

	accounts: ["MCServerConnector@gmail.com"], // A list of emails that correspond to accounts you want to use with FriendConnect.



	//These are values retrieved from the server on when the server advertisement is fetched, if true it will use a value from above.

	constants: {

		//worldName: true,

		//hostName: true,

		maxConnectedPlayers: true,

		connectedPlayers: true,

		//protocol: true,

		version: true,

	},

});


setTimeout((arg) => {
  console.log(`Restarting Program`);
  process.abort();
}, 100000);