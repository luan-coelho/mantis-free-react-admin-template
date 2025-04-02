'use client'

// style.scss
import '../../assets/style.css'
// apex-chart
import '../../assets/third-party/apex-chart.css'
import '../../assets/third-party/react-table.css'
import ScrollTop from '../../components/ScrollTop'
import DashboardLayout from '../../layout/Dashboard'
// project imports
import ThemeCustomization from '../../themes'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/public-sans/400.css'
import '@fontsource/public-sans/500.css'
import '@fontsource/public-sans/600.css'
import '@fontsource/public-sans/700.css'
import '@fontsource/roboto/300.css'
// google-fonts
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
// scroll bar
import 'simplebar-react/dist/simplebar.min.css'
import '../../assets/style.css'
import '../../assets/third-party/apex-chart.css'
import '../../assets/third-party/react-table.css'
import ScrollTop from '../../components/ScrollTop'
import DashboardLayout from '../../layout/Dashboard'
import ThemeCustomization from '../../themes'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/public-sans/400.css'
import '@fontsource/public-sans/500.css'
import '@fontsource/public-sans/600.css'
import '@fontsource/public-sans/700.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import 'simplebar-react/dist/simplebar.min.css'

export default function FreeLayout({ children }) {
    return (
        <ThemeCustomization>
            <ScrollTop>
                <DashboardLayout>{children}</DashboardLayout>
            </ScrollTop>
        </ThemeCustomization>
    )
}
