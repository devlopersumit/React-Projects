import { movies } from './Data/movies.js'

function MovieComponent() {
    return (
       <div className='flex flex-col items-center justify-center w-full p-4'>
        <h1 className='text-center text-2xl font-bold flex justify-center items-center flex-wrap w-full mb-6'> Movies List</h1>
        <div className='flex flex-wrap justify-center gap-6 w-full max-w-7xl border-1 border-solid border-gray-200 rounded-md p-1'>
            {movies.map((movie) => (
                <div key={movie.id} className='w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(25%-1.5rem)] '>
                    <img src={movie.poster} alt={movie.title} className='w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300' />
                    <p className='border-1 border-solid border-gray-500 rounded bg-orange-300 mt-3 p-2'>{movie.title} directed by {movie.director} release on {movie.year}</p>

                </div>
            ))}
        </div>
       </div>
    );
}

export default MovieComponent