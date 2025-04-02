'use client'

import { useCallback } from 'react'
import NextLink from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

// Função auxiliar para verificar se um link atual está ativo
export function useActiveLink(path) {
    const pathname = usePathname()

    // Compatibilidade com o path relativo em relação ao basePath
    if (path.startsWith('/') && !path.startsWith('/free')) {
        path = `/free${path}`
    }

    return pathname === path || pathname.startsWith(`${path}/`)
}

// Componente de Link simplificado que usa NextLink
export function Link({ to, children, ...props }) {
    // Para compatibilidade com a API react-router
    const href = to

    // Se for um link externo, use um elemento <a> padrão
    if (href && (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:'))) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
                {children}
            </a>
        )
    }

    return (
        <NextLink href={href} {...props}>
            {children}
        </NextLink>
    )
}

// Hook para navegação programática
export function useNavigate() {
    const router = useRouter()

    return useCallback(
        to => {
            router.push(to)
        },
        [router],
    )
}
