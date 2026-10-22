export const contact = {
  // Número informado pela academia, preservado sem acrescentar dígitos.
  whatsapp: '555494061628',
  instagram: 'https://www.instagram.com/newreforceacademia/',
  whatsappDisplay: '+55 (54) 9406-1628',
  instagramHandle: '@newreforceacademia',
  city: 'Passo Fundo, RS',
  // Endereço confirmado na imagem enviada pelo usuário.
  address: 'Rua Aldino Graeff, 67 — Boqueirão',
  postalCode: '99025-500',
  mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Rua%20Aldino%20Graeff%2067%2C%20Boqueir%C3%A3o%2C%20Passo%20Fundo%20RS%2C%2099025-500%2C%20Brasil',
  mapEmbedUrl: 'https://www.google.com/maps?q=Rua%20Aldino%20Graeff%2067%2C%20Boqueir%C3%A3o%2C%20Passo%20Fundo%20RS%2C%2099025-500%2C%20Brasil&output=embed',
};
export function contactUrl(plan?: string) {
  const message = plan
    ? `Olá! Gostaria de saber mais sobre o plano ${plan} da New Reforce Academia.`
    : 'Olá! Quero conhecer a New Reforce Academia e saber mais sobre os planos.';
  return contact.whatsapp ? `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}` : contact.instagram;
}

