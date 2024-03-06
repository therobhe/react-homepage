export const Footer = () => {
const year = new Date().getFullYear()

    return (
        <footer>
            <div className="text-center">
                <small className="copyright">&copy; Robert Heinemann | {year}</small>
            </div>
        </footer>
    )
}