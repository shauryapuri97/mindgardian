# Mindgardian

This is a dashboard prototype for Mindgardian, a tool that allows users to be able to visualise and interact with an artificial neural network, dynamically.


https://github.com/shauryapuri97/mindgardian/assets/23358500/5fbd934a-1f20-4127-9e9f-ecec7a211ecb





## How to Run

In the project directory, you can run:

### `npm install`

This will install all the necessary packages for the project from package.json

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Features

### `Home`

The home page displays a series of networks for the user to choose from with a Quick Search button that allows them to filter through these networks and seamlesly find the one they are looking for.

### `Network Visualiser`

This is where the magic happens, the user will be able to visualise the directional newural network build on a series of nodes and edges. One can hover on a node to see the type of that node and also find labels on the edges. Clicking on a node opens a panel on the right hand side with more information about the node, including parameters, etc.

#### `Visualise forward pass`

In the visualiser panel, there is an area displaying the source and destination nodes selected. Selecting two nodes simultaneosuly on the graph will find and display all the edges between the two nodes dynamically and seamlessly using animations.

The uses an algorithm which wasn't as straight forward as I had thought initially. The initial naive approach was to be able to traverse every node from source to target and mark all the visited edges until the target is reached. However, the issue with this approach was that it was marking the edges that would potentially not even lead to the target. The inverse of this however suddenly makes a lot of sense. i.e. start from the target and mark your way back to the source. This gave the algo the accuracy it was missing.

<img width="1440" alt="Screenshot 2023-09-17 at 15 55 25" src="https://github.com/shauryapuri97/mindgardian/assets/23358500/ac3cc48c-a87f-4295-ae65-18b610c7557e">


Note: Black is start node, Red is end node.

#### `Adding a new node`

The next task in hand was for the user to be able to create a node. The last thing I wanted was the user creating an edge and a node seperately. The most minimal and usable experience I coudl come up with was as below:

1. Click and drag an edge from a node, leave it anywhere on the canvas. This will display a pop up asking the user to pick a type of the new node.
2. Choose the type and hit create.

Done. Easy.


Once the node is created you can also choose to continue creating edges between other nodes.
<img width="1439" alt="Screenshot 2023-09-17 at 15 55 43" src="https://github.com/shauryapuri97/mindgardian/assets/23358500/f1726f40-c8f4-4dc1-aa13-35664607f4fd">



#### `Remove a new node / edge`

Click on the node / edge and hit the delete button on your keyboard

#### `Zoom and Pan`

Use your mouse to zoom in and out of the canvas, you can also use the user controls on the bottom left.
<img width="1439" alt="Screenshot 2023-09-17 at 15 56 03" src="https://github.com/shauryapuri97/mindgardian/assets/23358500/dd48eed1-dbe7-499b-b8a1-4658148520c6">



### `Tech stack`

ReactJS, Redux Toolkit, React Flow, Material UI

### `Self reflection`

If I were to redo this project / do it aiming for productio, I would definitely make it a Typescript project. With so many reusable components in place, typecasing would really help increase the performance of the application with fewer bugs.

I would also use Styled compnents or similar for styling across the application instead of doing it inline.
