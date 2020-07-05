
export const getGifs =  async(category) => {
    // encodeURI -> por. espacios a %20
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) } &limit=10&api_key=nWUqpRC2fdvoPjN7itZrjYvGJCF3fMZj`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        
        return {

            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url // ? por si no viene.
    }
        

    });

    return gifs;
    
}
