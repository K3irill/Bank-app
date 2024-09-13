const SITE_NAME = `NEON BANK`

export const getTitle = title => {
	return title ? `${title} | ${SITE_NAME}` : SITE_NAME
}
