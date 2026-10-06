import React, { useState, useEffect } from "react";

import { supabase } from "./lib/supabase";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import UnsentLetter from "./pages/UnsentLetter";
import Contact from "./pages/Contact";

function App() {

    const [currentPage, setCurrentPage] = useState("home");
    const [memories, setMemories] = useState([]);

    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);


    // Logout
    const handleLogout = async () => {
        await supabase.auth.signOut();
        setCurrentPage("home");
    };


    // Check login status
    useEffect(() => {

        supabase.auth.getSession().then(({ data }) => {
            setSession(data.session);
            setLoading(false);
        });

        const { data: authListener } =
            supabase.auth.onAuthStateChange(
                (_event, session) => {
                    setSession(session);
                }
            );

        return () => {
            authListener.subscription.unsubscribe();
        };

    }, []);


    // Fetch memories
    useEffect(() => {

        const fetchMemories = async () => {

            const { data, error } = await supabase
                .from("memories")
                .select("*")
                .order("date", { ascending: false });

            if (error) {
                console.error(
                    "Error fetching memories:",
                    error.message
                );
            } else {

                setMemories(data || []);

                console.log(
                    "Memories fetched successfully!",
                    data
                );
            }
        };

        fetchMemories();

    }, []);


    if (loading) {
        return <p>Loading...</p>;
    }


    return (
        <div>

            {/* HOME */}
            {currentPage === "home" && (
                <Home
                    onNavigate={setCurrentPage}
                    onLogout={handleLogout}
                />
            )}


            {/* JOURNAL */}
            {currentPage === "journal" && (
                <Journal
                    onNavigate={setCurrentPage}
                    memories={memories}
                />
            )}


            {/* UNSENT LETTER */}
            {currentPage === "unsent-letter" && (
                <UnsentLetter
                    onNavigate={setCurrentPage}
                    onSaveMemory={(newMemory) =>
                        setMemories((prevMemories) => [
                            ...prevMemories,
                            newMemory
                        ])
                    }
                />
            )}


            {/* LOGIN */}
            {currentPage === "login" && (
                <Login
                    onNavigate={setCurrentPage}
                />
            )}

            {currentPage === "contact" && (
                <Contact onNavigate={setCurrentPage} />
            )}

        </div>
    );
}

export default App;