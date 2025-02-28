// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { api_base_url } from "../helper";
// import NavBar from "../components/Navbar";
// import { marked } from "marked";
// import hljs from "highlight.js";
// import "github-markdown-css/github-markdown-dark.css";
// import "highlight.js/styles/github-dark.css";
// import { toast } from "react-toastify";

// const TutorialPage = () => {
//   const { language } = useParams();
//   const [markdownContent, setMarkdownContent] = useState("");
//   const [urlToMarkdown, seturlToMarkdown] = useState([]);
//   const { title } = useParams("title");

//   useEffect(() => {
//     const fetchTutorials = async () => {
//       try {
//         const res = await fetch(`${api_base_url}/api/tutorials/all`);
//         if (!res.ok) throw new Error("Failed to fetch tutorials");
//         const data = await res.json();

//         seturlToMarkdown(
//           data.tutorial
//             .flatMap((item) => item.topics)
//             .filter((topic) => topic.title === "Introduction to Python")
//             .map((topic) => topic.urlToMarkdown)
//         );
//       } catch (error) {
//         console.error("Error fetching tutorials:", error);
//       }
//     };
//     fetchTutorials();
//   }, [language]);

//   useEffect(() => {
//     if (urlToMarkdown[0]) {
//       fetch(urlToMarkdown[0])
//         .then((res) => res.text())
//         .then((text) => setMarkdownContent(text))
//         .catch((err) => console.error("Error fetching markdown:", err));
//     }
//   }, [urlToMarkdown]);

//   useEffect(() => {
//     // Apply syntax highlighting
//     hljs.highlightAll();

//     // Add copy buttons to code blocks
//     const addCopyButtons = () => {
//       document.querySelectorAll("pre").forEach((preBlock) => {
//         // Skip if already has a button
//         if (preBlock.querySelector(".copy-button")) return;

//         const button = document.createElement("button");
//         button.className =
//           "copy-button bg-[#238636] text-white px-2 py-1 rounded absolute top-2 right-2 text-sm";
//         button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M8 7H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-3m-7-9h6a2 2 0 012 2v6m-6-11l7 7" />
// </svg>`;
//         button.onclick = () => copyCode(preBlock, button);

//         // Wrap pre block inside a relative div
//         const wrapper = document.createElement("div");
//         wrapper.className = "relative";
//         preBlock.parentNode.insertBefore(wrapper, preBlock);
//         wrapper.appendChild(preBlock);
//         wrapper.appendChild(button);
//       });
//     };

//     const copyCode = (preBlock, button) => {
//       const code = preBlock.querySelector("code").innerText;
//       navigator.clipboard
//         .writeText(code)
//         .then(() => {
//           button.innerHTML = `
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline">
//             <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m4-5v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2h6m2 0l4 4m0 0l-4-4m4 4H13" />
//           </svg>
//         `;
//           toast.info("Copied to clipboard", {
//             position: "top-right",
//             autoClose: 2000,
//             hideProgressBar: true,
//             closeOnClick: true,
//             pauseOnHover: false,
//             draggable: true,
//           });
//           setTimeout(
//             () =>
//               (button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M8 7H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-3m-7-9h6a2 2 0 012 2v6m-6-11l7 7" />
// </svg>`),
//             2000
//           );
//         })
//         .catch(() => alert("Failed to copy!"));
//     };

//     addCopyButtons();
//   }, [markdownContent]);

//   return (
//     <div className="min-h-screen bg-[#0d1117] text-white">
//       <NavBar />
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
//         <h1 className="text-center text-[#c792ea] text-3xl sm:text-5xl font-extrabold mb-4 sm:mb-6 tracking-wide">
//           {title.substring(1)} Tutorials
//         </h1>
//         <article className="markdown-body text-sm sm:text-base leading-relaxed sm:leading-loose">
//           <div dangerouslySetInnerHTML={{ __html: marked(markdownContent) }} />
//         </article>
//       </div>
//     </div>
//   );
// };

// export default TutorialPage;

{
  /*CODE1*/
}

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { api_base_url } from "../helper";
// import NavBar from "../components/NavBar";
// import { marked } from "marked";
// import hljs from "highlight.js";
// import "github-markdown-css/github-markdown-dark.css";
// import "highlight.js/styles/github-dark.css";
// import { toast } from "react-toastify";
// import Footer from "../components/Footer";

// const TutorialPage = () => {
//   const { language, title } = useParams();
//   const [tutorial, setTutorial] = useState({ markdown: "", url: "" });
//   console.log("Lang: ", title);

//   // Fetch tutorials
//   useEffect(() => {
//     document.title = `${title.substring(1)} Tutorials - ByteForge`;
//     const fetchTutorials = async () => {
//       try {
//         const res = await fetch(`${api_base_url}/api/tutorials/all`);
//         if (!res.ok) throw new Error("Failed to fetch tutorials");
//         const data = await res.json();

//         const url = data.tutorial
//           .flatMap((item) => item.topics)
//           .find(
//             (topic) => topic.title === title.substring(1, title.length)
//           )?.urlToMarkdown;

//         if (url) setTutorial((prev) => ({ ...prev, url }));
//       } catch (error) {
//         console.error("Error fetching tutorials:", error);
//       }
//     };

//     fetchTutorials();
//   }, [language, tutorial]);

//   // Fetch markdown content
//   useEffect(() => {
//     if (!tutorial.url) return;

//     fetch(tutorial.url)
//       .then((res) => res.text())
//       .then((text) => setTutorial((prev) => ({ ...prev, markdown: text })))
//       .catch((err) => console.error("Error fetching markdown:", err));
//   }, [tutorial.url]);

//   // Highlight code and add copy buttons
//   useEffect(() => {
//     hljs.highlightAll();

//     const addCopyButtons = () => {
//       document.querySelectorAll("pre").forEach((preBlock) => {
//         if (preBlock.querySelector(".copy-button")) return;

//         const button = document.createElement("button");
//         button.className =
//           "copy-button bg-[#238636] text-white px-2 py-1 rounded absolute top-2 right-2 text-sm";
//         button.innerHTML = copyIcon;
//         button.onclick = () => copyCode(preBlock, button);

//         const wrapper = document.createElement("div");
//         wrapper.className = "relative";
//         preBlock.parentNode.insertBefore(wrapper, preBlock);
//         wrapper.appendChild(preBlock);
//         wrapper.appendChild(button);
//       });
//     };

//     addCopyButtons();
//   }, [tutorial.markdown]);

//   // Copy-to-clipboard function
//   const copyCode = (preBlock, button) => {
//     const code = preBlock.querySelector("code").innerText;
//     navigator.clipboard.writeText(code).then(() => {
//       button.innerHTML = copiedIcon;
//       toast.info("Copied to clipboard", { autoClose: 2000 });

//       setTimeout(() => (button.innerHTML = copyIcon), 2000);
//     });
//   };

//   return (
//     <>
//       <div className="min-h-screen bg-[#0d1117] text-white">
//         <NavBar />
//         <div className=" max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
//           <h1 className="text-center text-[#c792ea] text-3xl sm:text-5xl font-extrabold mb-4 sm:mb-6 tracking-wide">
//             {title.substring(1)} Tutorials
//           </h1>
//           <article className="markdown-body text-sm sm:text-base leading-relaxed sm:leading-loose">
//             <div
//               dangerouslySetInnerHTML={{ __html: marked(tutorial.markdown) }}
//             />
//           </article>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// // Icons for copy and copied states
// const copyIcon = `
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline">
//     <path stroke-linecap="round" stroke-linejoin="round" d="M8 7H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-3m-7-9h6a2 2 0 012 2v6m-6-11l7 7" />
//   </svg>`;

// const copiedIcon = `
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline">
//     <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m4-5v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2h6m2 0l4 4m0 0l-4-4m4 4H13" />
//   </svg>`;

// export default TutorialPage;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api_base_url } from "../helper";
import NavBar from "../components/NavBar";
import { marked } from "marked";
import hljs from "highlight.js";
import "github-markdown-css/github-markdown-dark.css";
import "highlight.js/styles/github-dark.css";
import { toast } from "react-toastify";
import Footer from "../components/Footer";

// Configure marked to use highlight.js
marked.setOptions({
  highlight: (code, lang) => {
    return lang && hljs.getLanguage(lang)
      ? hljs.highlight(code, { language: lang }).value
      : hljs.highlightAuto(code).value;
  },
});

const TutorialPage = () => {
  const { language, title } = useParams();
  const [tutorial, setTutorial] = useState({ markdown: "", url: "" });
  const [loading, setLoading] = useState(true); // Added loading state

  console.log("Lang: ", title);

  // Fetch tutorials
  useEffect(() => {
    document.title = `${title.substring(1)} Tutorials - ByteForge`;
    const fetchTutorials = async () => {
      try {
        const res = await fetch(`${api_base_url}/api/tutorials/all`);
        if (!res.ok) throw new Error("Failed to fetch tutorials");
        const data = await res.json();

        const url = data.tutorial
          .flatMap((item) => item.topics)
          .find(
            (topic) => topic.title === title.substring(1, title.length)
          )?.urlToMarkdown;

        if (url) setTutorial((prev) => ({ ...prev, url }));
      } catch (error) {
        console.error("Error fetching tutorials:", error);
      }
    };

    fetchTutorials();
  }, [language, title]);

  // Fetch markdown content
  useEffect(() => {
    if (!tutorial.url) return;

    setLoading(true); // Start loading before fetching

    fetch(tutorial.url)
      .then((res) => res.text())
      .then((text) => {
        setTutorial((prev) => ({ ...prev, markdown: text }));
        setLoading(false); // Stop loading after fetching
      })
      .catch((err) => {
        console.error("Error fetching markdown:", err);
        setLoading(false);
      });
  }, [tutorial.url]);

  // Highlight code and add copy buttons
  useEffect(() => {
    if (!loading) {
      hljs.highlightAll();
      setTimeout(addCopyButtons, 100);
    }
  }, [tutorial.markdown, loading]);

  // Function to add copy buttons
  const addCopyButtons = () => {
    document.querySelectorAll("pre").forEach((preBlock) => {
      if (preBlock.parentNode.classList.contains("relative")) return; // Avoid duplicate wrapping

      const button = document.createElement("button");
      button.className =
        "copy-button bg-[#238636] text-white px-2 py-1 rounded absolute top-2 right-2 text-sm";
      button.innerHTML = copyIcon;
      button.onclick = () => copyCode(preBlock, button);

      const wrapper = document.createElement("div");
      wrapper.className = "relative";

      preBlock.parentNode.insertBefore(wrapper, preBlock);
      wrapper.appendChild(preBlock);
      wrapper.appendChild(button);
    });
  };

  // Copy-to-clipboard function
  const copyCode = (preBlock, button) => {
    const code = preBlock.querySelector("code").innerText;
    navigator.clipboard.writeText(code).then(() => {
      button.innerHTML = copiedIcon;
      toast.info("Copied to clipboard", { autoClose: 2000 });

      setTimeout(() => (button.innerHTML = copyIcon), 2000);
    });
  };

  return (
    <>
      <div className="min-h-screen bg-[#0d1117] text-white">
        <NavBar />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
          <h1 className="text-center text-[#c792ea] text-3xl sm:text-5xl font-extrabold mb-4 sm:mb-6 tracking-wide">
            {title.substring(1)} Tutorials
          </h1>

          {/* Loading Spinner */}
          {loading ? (
            <div className="flex flex-col items-center justify-center py-10">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
              <p className="text-gray-400 mt-3">Loading tutorial...</p>
            </div>
          ) : (
            <article className="markdown-body text-sm sm:text-base leading-relaxed sm:leading-loose">
              <div
                dangerouslySetInnerHTML={{ __html: marked(tutorial.markdown) }}
              />
            </article>
          )}
        </div>
      </div>
      <Footer />

      {/* Tailwind Trick to Keep Absolute Positioning Classes */}
      <div className="hidden absolute top-2 right-2"></div>
    </>
  );
};

// Icons for copy and copied states
const copyIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline">
    <path stroke-linecap="round" stroke-linejoin="round" d="M8 7H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-3m-7-9h6a2 2 0 012 2v6m-6-11l7 7" />
  </svg>`;

const copiedIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m4-5v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2h6m2 0l4 4m0 0l-4-4m4 4H13" />
  </svg>`;

export default TutorialPage;
