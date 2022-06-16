const BTN_BUSCA_IMG = document.getElementById('busca-imagem')

const BASE_URL = 'https://thatcopy.pw/catapi/rest/'



const buscaImage = async () => {
    try{
    const response = await fetch(BASE_URL);
    
      if (!response.ok) {
        return new Error('falhou a requisição') 
      }

      const result = await response.json();

      
      return result.webpurl;
    }catch(err){
        console.log(err)
    }
}

const loadImg = async () =>{
    const imgCat = document.getElementById('cat')
    imgCat.src = await buscaImage()
}

BTN_BUSCA_IMG.addEventListener('click', loadImg)


loadImg()
