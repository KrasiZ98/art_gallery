export const editValidation = (value) => {
    const error = {};

    if (value.title === '') {
        error.title = 'Title is required!!!';
    }
    if (value.painting_tech === '') {
        error.painting_tech = 'Painting Tech is required!!!';
    }
    if (value.picture === '') {
        error.picture = 'Picture is required!!!';
    }
    if (value.certificate === '') {
        error.certificate = 'Certificate is required!!!';
    }

    return error;
}