// import { JSDOM } from 'jsdom';
// import DOMPurify from 'dompurify';

// const window = new JSDOM('').window;
// const purify = DOMPurify(window);

const linkRegex = /([a-zA-Z\.-]|[https:\/\/www\.]|[www\.])+[a-zA-z]+\.([a-z]{2,}(\/[a-z]*)+|[a-z]{2,})/g;

const formatMessage = (message: string) => {
    const formattedMessage = message.replace(linkRegex, (match)=> (!match.startsWith('http'))?`<a href="https://${match}" target="_blank">${match}</a>`:`<a href="${match}" target="_blank">${match}</a>`);
    // const sanitizedMessage = purify.sanitize(formattedMessage, { USE_PROFILES: {html: true} });
    return formattedMessage;
}

export default formatMessage;