var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
    title:   'article one vishal sharma',
    heading: 'article one',
    date:    'september 5, 2016',
    content:    `<p>
             this is the content of my first article.this is the content of my first article.
            this is the content of my first article.this is the content of my first article.
            this is the content of my first article.this is the content of my first article.
          </p><p>
          
           this is the content of my first article.this is the content of my first article.
           this is the content of my first article.this is the content of my first article.
           this is the content of my first article.this is the content of my first article.
        </p><p>
         
           this is the content of my first article.this is the content of my first article.
           this is the content of my first article.this is the content of my first article.
           this is the content of my first article.this is the content of my first article.
          </p>
},
   
     'article-two':  {
    title:      'article two vishal sharma',
    heading:    'article two',
    date:       'september 5, 2016',
    content:   <p>
               this is the content of my second article.this is the content of my second article.
               </p>`
 },
     'article-three': {
    title:    'article three vishal sharma',
    heading:  'article three',
    date:     'september 15, 2016',
    content:   `<p>
              this is the content of my third article.
              </p>` 
},
};

function createtemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmltemplate = `<html>
    <head>
        <title>
               ${title}
               </title>
               <meta name="viewport" content="width=device-width, initial-scale=1" />
               <link href="/ui/style.css" rel="stylesheet" />
        </head>
     <body>
     <div class="container">
        <div>
            <a href="/">home</a>
        </div>
    <hr/>
    <h3>${heading}</h3>
    <div>
       ${date}
    </div>
    <div>
       ${content}
    </div></div>
    </body>
   </html>
`;  return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('test-db', function (req, res)
  {
      
      
  })

var counter = 0;
app.get('/counter',function(req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});

var names = [];
app.get('/submit-name', function(req, res) {  //url: /submit-name?name=xxx 
    //get the name from the request
    var name = req.query.name;
    
    names.push(name);
    // json javascript object notation
    res.send(JSON.stringify(names));
});

app.get('/:articlename',function (req, res) {
    // articlename == article-one
    // articles[articlename] == {} content object for article one
    var articlename = req.params.articlename;
   res.send(createtemplate(articles[articlename]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
