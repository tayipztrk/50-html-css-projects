const page1 = document.getElementById('page1');
const selam = document.getElementById('selam');
const aTags = document.querySelectorAll('a');
const Objects = document.querySelectorAll('object');


aTags.forEach(aTag => {
    aTag.addEventListener('click', (e) => {
   
        const pageNumber=e.path[0].id;
        console.log(pageNumber);

    Objects.forEach(object => {
        if(object.id === pageNumber)
        {   
            console.log(pageNumber);
            console.log(object.className);
            removeActiveClasses();
            removeHiddenClass(object);
            object.classList.add('active1');
        }else{
            object.classList.add('hidden1');
        }
    });
})
})

function removeActiveClasses(){
    Objects.forEach(object=>{
        object.classList.remove('active1');
        
    })
}
function removeHiddenClass(object){
        object.classList.remove('hidden1'); 
}
