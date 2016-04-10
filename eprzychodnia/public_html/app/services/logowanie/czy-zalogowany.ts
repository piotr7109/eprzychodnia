export function czyZalogowany()
{
    return !!localStorage.getItem('token');
}