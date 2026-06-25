import express from 'express'
import authRoutes from './routes/authRoutes.js'
import charactersRoutes from './routes/charactersRoutes.js'



const app = express()

app.use(express.json())

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/characters", charactersRoutes);

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Servidor en puerto ${PORT}`)
})

export default app