import web3 from './web3';

const address = "0x784723ADCA575aD62B83271Ed868257BeE9938A1";
const abi = [{"constant":true,
inputs:[],
name:"manager",
outputs:[{
	name:"",
	type:"address"}],
	payable:false,
	stateMutability:"view",
	type:"function"},
	{constant:false,
	inputs:[],
	name:"pickWinner",
	outputs:[],
	payable:false,
	stateMutability:"nonpayable",
	type:"function"},
	{constant:true,
	inputs:[],
	name:"random",
	outputs:[{"name":"","type":"uint256"}],
	payable:false,
	stateMutability:"view",
	type:"function"},
	{constant:true,
	inputs:[],
	name:"getPlayers",
	outputs:[{
	name:"",
	type:"address[]"
	}],
	payable:false,
	stateMutability:"view",
	type:"function"},
	{constant:false,
	inputs:[],
	name:"enter",
	outputs:[],
	payable:true,
	stateMutability:"payable",
	type:"function"},
	{constant:true,
	inputs:[{"name":"",
	type:"uint256"}],
	name:"players",
	outputs:[{
	name:"",
	type:"address"}],
	payable:false,
	stateMutability:"view",
	type:"function"},
	{inputs:[],
	payable:false,
	stateMutability:"nonpayable",
	type:"constructor"}]

//creates instance of contract that exists on the blockchain which we can work with on the React side of the app
export default new web3.eth.Contract(abi, address);

