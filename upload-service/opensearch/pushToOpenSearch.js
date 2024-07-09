import { Client } from "@opensearch-project/opensearch";

const pushToOpenSearch =  async (title, description, author, url) => {
    try {
        console.log('Pushing to OpenSearch');
    
        var host_aiven =process.env.AIVEN_HOST;
       
        var client = new Client({
            node: host_aiven
        });
 
        var index_name = "video";
        var document = {
            title: title,
            author: author,
            description: description,
            url: url
        };
 
        var response = await client.index({
            id: title, // id should ideally be db id
            index: index_name,
            body: document,
            refresh: true,
        });
 
        console.log("Adding document:");
        console.log(response.body);
 
        console.log("Pushed to OpenSearch Successfully")
    } catch (error) {
 
        // Respond with error message
        console.log("Error Occured While Pushing to Open Search",error.message)
    
    }
 }
export default pushToOpenSearch;