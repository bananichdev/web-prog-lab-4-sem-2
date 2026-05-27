import express from 'express';
import bodyParser from 'body-parser';
import { createReadStream } from 'fs';
import * as crypto from 'crypto';
import * as http from 'http';
import appSrc from './app.js';

const app = appSrc(express, bodyParser, createReadStream, crypto, http);

app.listen(process.env.PORT);
