import react from "react";
import Blogcard from "./resuable/blogCard";
import JoinUs from "./resuable/joinUs";
import { blogData } from "./data";


function BlogPost(){

    return(
    <div className="blogSection">
        <div className="blog_datawrapper">
            <h2>Articles & News</h2>
            <span>It is a long established fact that a reader will be 
                distracted by the of readable content of a page when 
                lookings at its layouts the points of using.</span>
        </div>

        <div className="blog_cardwrapper">
        {blogData.map((item)=> (
            <Blogcard
            title={item.title}
            tag={item.tag}
            date={item.date}


            />
        ))}
        
        </div>

        <JoinUs
        title="Wanna Join The Interno ?"
        description="It is a long established fact will be distracted."
        buttonText="Get Started"
        />
    </div>
    );
}

export  default BlogPost;