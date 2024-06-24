// utils/dateUtils.ts

/**
 * Formate une date ISO 8601 en format de date français.
 * @param {string} dateISO - La date ISO 8601 à formater.
 * @returns {string} La date formatée en français.
 */
export const formatDateFR = (dateISO: string): string => {
    const date = new Date(dateISO);
    return new Intl.DateTimeFormat('fr-FR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    }).format(date);
};
