const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')
Database.then(async db => {
    //inserir dados na tabela
    await saveOrphanage(db,
        {
            lat: "-8.059471",
            lng: "-34.8940264",
            name: "Lar dos meninos",
            about: "Presta assistência a crianças de 05 a 15 anos que se encontram em situação de risco e/ou vunerabilidade social.",
            whatsapp: "988998381",
            images: [
                "https://images.unsplash.com/photo-1601564267830-523b71e24db0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9https://images.unsplash.com/photo-1601564267830-523b71e24db0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
                "https://images.unsplash.com/photo-1591593443255-db4646e739b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
            ].toString(),
            instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
            opening_hours: "Horarios de visitas Das 8h até as 18h",
            open_on_weekends: "0",

        })
    //consultar dados
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente 1 orfanato pelo id
    const orphanage = await db.all("SELECT * FROM  orphanages")
    console.log(orphanage)
    //deletar
    // console.log(await db.run("DELETE FROM  orphanages WHERE id = '4'"))

})