

export const getGifs = async( category ) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?q= ${encodeURI(category)}&limit=10&api_key=9pefv5hEem0fukwcKTNNJEBS6AF5JDr9`;

    const resp = await fetch (url); 

    const {data} = await resp.json();

    const gifs = data.map( (img) => {
        return ({
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,


        })
    })

    return gifs;
}
