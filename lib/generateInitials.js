export function generateInitials(name){
    //Split the name into word
    const words = name.split('');

   const  firstInitial = words[0][0].toUpperCase();
    let secondInitial = '';

 

    if(words.length > 1){
        secondInitial = words[1][0].toUpperCase();
    }
   

    return firstInitial + secondInitial;
}