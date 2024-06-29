import { useEffect, useState } from "react";

const Message = ({type, msg}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!msg) {
      setVisible(false);
      return
    }
    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000)

    return () => clearTimeout(timer);

  }, [msg])

  return (
    <>
      {visible && (
        <div className={`border mb-5 px-4 py-3 rounded relative ${type == "success" ? "bg-green-100 border-green-400 text-green-700" : "bg-red-100 border-red-400 text-red-700"}`} role="alert">
          <span className="block sm:inline">{msg}</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg className={`fill-current h-6 w-6 ${type == "success" ? "text-green-500" : "text-red-500"}`} role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
          </span>
        </div>
      )}
    </>
  )
}

export default Message;