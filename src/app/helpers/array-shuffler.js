//helper function to shuffle an array
// moved this file inside your src folder.
export default function arrayShuffler( array ) {
  for ( let i = array.length - 1; i > 0; i-- ) {
    let j = Math.floor( Math.random() * ( i + 1 ) );
    let temp = array[ i ];
    array[ i ] = array[ j ];
    array[ j ] = temp;
  }
  return array;
}
