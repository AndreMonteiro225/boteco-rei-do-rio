// Componente reutilizável para manter consistência nos botões
import styles from './styles.module.css';

export default function Button({ children, variant = "primary", className = "", ...props }) {
  // Mapeia variantes para classes CSS
  const variantClass = styles[variant] || styles.primary;
  
  return (
    <button className={`${styles.base} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}