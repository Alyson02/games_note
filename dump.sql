--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: game_note; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.game_note (
    id integer NOT NULL,
    "gameNome" text NOT NULL,
    terminou boolean DEFAULT false NOT NULL,
    anotacao text NOT NULL,
    nota integer NOT NULL
);


--
-- Name: gamenote_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.gamenote_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: gamenote_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.gamenote_id_seq OWNED BY public.game_note.id;


--
-- Name: game_note id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.game_note ALTER COLUMN id SET DEFAULT nextval('public.gamenote_id_seq'::regclass);


--
-- Data for Name: game_note; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.game_note VALUES (2, 'Elden Ring', true, 'Obra prima dos deuses', 10);
INSERT INTO public.game_note VALUES (4, 'Rockt League', false, 'Drivetido', 8);


--
-- Name: gamenote_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.gamenote_id_seq', 4, true);


--
-- Name: game_note gamenote_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.game_note
    ADD CONSTRAINT gamenote_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

