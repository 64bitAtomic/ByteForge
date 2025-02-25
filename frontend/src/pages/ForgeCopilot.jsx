import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { AiOutlineSend } from "react-icons/ai";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const ForgeCopilot = () => {
  const [instruction, setInstruction] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateCode = async () => {
    if (!instruction.trim()) return;

    const userMessage = { role: "user", content: instruction };
    setMessages([...messages, userMessage]);
    setInstruction("");
    setLoading(true);
    setError(null);

    try {
      // const response = await fetch(
      //   "https://api.edenai.run/v2/text/code_generation",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //       authorization:
      //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNTFiOGIyYWYtOTQxZC00ZWRiLWE3NjktNzdhODc2MWZjNjE0IiwidHlwZSI6ImFwaV90b2tlbiJ9.vgip6BEjWx5PPkFR6B1bs_-NpDbBW-XoqqYg7kkJZ6U",
      //     },
      //     body: JSON.stringify({
      //       providers: "openai",
      //       prompt: "",
      //       instruction: instruction,
      //       temperature: 0.1,
      //       max_tokens: 500,
      //     }),
      //   }
      // );

      // if (!response.ok) {
      //   throw new Error(`HTTP error! Status: ${response.status}`);
      // }

      // const data = await response.json();

      const data = {
        openai: {
          generated_text:
            " a prime number or not.\n" +
            "\n" +
            "A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.\n" +
            "\n" +
            "Here's a simple function to check if a number is prime:\n" +
            "\n" +
            "```python\n" +
            "def is_prime(n):\n" +
            "    if n <= 1:\n" +
            "        return False\n" +
            "    if n <= 3:\n" +
            "        return True\n" +
            "    if n % 2 == 0 or n % 3 == 0:\n" +
            "        return False\n" +
            "    i = 5\n" +
            "    while i * i <= n:\n" +
            "        if n % i == 0 or n % (i + 2) == 0:\n" +
            "            return False\n" +
            "    return True\n" +
            "    return True\n" +
            "```\n" +
            "\n" +
            "This function first checks if the number is less than or equal to 1, in which case it is not prime. It then checks if the number is 2 or 3, which are prime numbers. For numbers greater than 3, it checks divisibility by 2 and 3. If the number is not divisible by 2 or 3, it uses a loop to check divisibility by numbers of the form 6k ± 1 up to the square root of the number. This is an efficient way to determine if a number is prime.",
          status: "success",
          usage: {
            completion_tokens: 281,
            prompt_tokens: 272,
            total_tokens: 553,
            completion_tokens_details: [Object],
            prompt_tokens_details: [Object],
          },
          cost: 0.0034900000000000005,
        },
      };
      const botMessage = {
        role: "bot",
        content: data.openai?.generated_text || "No response received.",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-col h-screen bg-gray-900 text-white">
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-4 rounded-lg max-w-3xl ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white self-end"
                    : "bg-gray-700 text-gray-200 self-start"
                }`}
              >
                {msg.role === "bot" ? (
                  <div className="prose prose-invert">
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  </div>
                ) : (
                  <p>{msg.content}</p>
                )}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="p-4 rounded-lg bg-gray-700 text-gray-200">
                Generating...
              </div>
            </div>
          )}
          {error && (
            <div className="flex justify-start">
              <div className="p-4 rounded-lg bg-red-600 text-white">
                {error}
              </div>
            </div>
          )}
        </div>

        {/* Input Box */}
        <div className="p-4 bg-gray-800 border-t border-gray-700 flex items-center">
          <textarea
            className="flex-1 p-3 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            rows="2"
            placeholder="Ask something..."
            value={instruction}
            onChange={(e) => setInstruction(e.target.value)}
          ></textarea>
          <button
            className="ml-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition duration-200"
            onClick={generateCode}
            disabled={loading}
          >
            <AiOutlineSend className="w-5 h-5" />
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgeCopilot;
