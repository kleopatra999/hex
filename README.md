#Hex ![travis-ci.org](https://travis-ci.org/themaninthesuitcase/hex.svg)

**Hex** is a basic [node.js][njs] powered blog engine.

> So Hex here has caught daftness off the Bursar,' said Ridcully. 'Simple. Real stupidity beats artificial intelligence every time.
>
> -- <cite>Terry Pratchett - Hogfather (1996)</cite>

#Usage

1. Install `node` and `npm`
1. Clone the repository `git clone git@github.com:themaninthesuitcase/hex.git`.
1. Install the dependancies by running `npm install`
1. run the application with `node hex.js`

Once running the default url will be http://localhost:3000

## View templates
### 500 Error
The default 500 error template uses a look and feel to simulate early green on black computers, and displays a set of Hex like nonsence.  I found this amusing for something no one should ever see.  You how ever may not, in which case the page is a standard hbs template that can be easily replaced.

## GNU Terry Pratchett
The more astute amongst you may have noticed the small theme running through this application.  At the time I began this project Sir Terry Pratchett had not long passed away.  His writing was what got me into reading and by extension into learning.  With out him and my mother buying me his books I would be a rather different person today.

In his memory this blog engine implements the [X-Clacks-Overhead][gnu] http header.

## Acknowledgements
Hex ~~is a fairly close rip off of~~ was inspired by [camel][camel] by [Casey Liss][liss].

[njs]: (https://nodejs.org)
[hex]: (http://en.wikipedia.org/wiki/Hex_(Discworld)
[gnu]: (http://www.gnuterrypratchett.com)
[camel]: (https://github.com/cliss/camel)
[liss]: (http://www.caseyliss.com)