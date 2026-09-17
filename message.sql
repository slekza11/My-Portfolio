-- ============================================
-- messages.sql
-- A simple table to store contact form messages
-- ============================================

CREATE TABLE messages (                  -- 1. Make a new "drawer" called messages
    id INTEGER PRIMARY KEY AUTOINCREMENT,-- 2. Every message gets its own number
    name TEXT NOT NULL,                  -- 3. The person's name (required)
    email TEXT NOT NULL,                 -- 4. The person's email (required)
    message TEXT NOT NULL,               -- 5. What they wrote (required)
    created_at TEXT DEFAULT CURRENT_TIMESTAMP -- 6. Date & time it was sent
);

INSERT INTO messages (name, email, message)  -- 7. Put a test message inside
VALUES ('Test User', 'test@example.com', 'Hello! This is a test.');

SELECT * FROM messages;                  -- 8. Show everything in the drawer